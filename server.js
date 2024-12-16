const http = require('http');
const fs = require('fs');
const bcrypt = require('bcrypt');
const querystring = require('querystring');

const USERS_FILE = './assets/json/awokwa.json';
const PORT = 3000;

// Fungsi untuk memverifikasi login
async function loginUser(username, plainPassword) {
    if (!fs.existsSync(USERS_FILE)) {
        return { success: false, message: 'No users registered' };
    }

    const users = JSON.parse(fs.readFileSync(USERS_FILE));
    const user = users.find((u) => u.username === username);

    if (!user) {
        return { success: false, message: 'User not found' };
    }

    const isMatch = await bcrypt.compare(plainPassword, user.password);
    if (isMatch) {
        return { success: true, message: 'Login successful' };
    } else {
        return { success: false, message: 'Incorrect password' };
    }
}

// Membuat server HTTP
const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        // Melayani halaman login
        fs.readFile('/', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST' && req.url === '/login') {
        // Menangani form login
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', async () => {
            const { username, password } = querystring.parse(body);
            const result = await loginUser(username, password);

            if (result.success) {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end('<h1>Login successful!</h1>');
            } else {
                res.writeHead(401, { 'Content-Type': 'text/html' });
                res.end(`<h1>Login failed: ${result.message}</h1>`);
            }
        });
    } else {
        // Endpoint tidak ditemukan
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

// Menjalankan server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
