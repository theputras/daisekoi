import express from 'express';
import bodyParser from 'body-parser';
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';
import serverless from 'serverless-http';

const app = express();
const usersFilePath = path.join(process.cwd(), 'public', 'assets', 'json', 'awokwa.json');

// Middleware untuk parsing JSON
app.use(bodyParser.json());

// Fungsi untuk membaca file JSON
const readUsersFromFile = () => {
    const rawData = fs.readFileSync(usersFilePath);
    return JSON.parse(rawData);
};

// Fungsi untuk menulis kembali data ke file JSON
const writeUsersToFile = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

// Endpoint untuk login dan create user
app.post('/api/serverLogin', async (req, res) => {
    const { action } = req.body; // Action untuk menentukan login atau create

    if (action === 'login') {
        const { username, password } = req.body;
        const users = readUsersFromFile();
        const user = users.find(user => user.username === username);

        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    return res.status(500).json('An error occurred');
                }
                if (result) {
                    return res.status(200).json({ name: user.nama, username: user.username });
                } else {
                    return res.status(401).json('Username or password is incorrect');
                }
            });
        } else {
            return res.status(401).json('Username or password is incorrect');
        }
    } else if (action === 'create') {
        const { username, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const users = readUsersFromFile();
        users.push({ username, email, role, password: hashedPassword });

        writeUsersToFile(users);
        return res.status(201).send('User added');
    } else {
        return res.status(400).json('Invalid action');
    }
});

// Endpoint untuk menghapus user
app.delete('/api/serverLogin', (req, res) => {
    const { username } = req.query;
    const users = readUsersFromFile();
    const filteredUsers = users.filter(user => user.username !== username);

    writeUsersToFile(filteredUsers);
    return res.status(200).send('User deleted');
});

// Export aplikasi Express sebagai handler untuk Vercel
export default serverless(app);

// app.listen(5501, () => {
//     console.log('listening on port 5501......');
// });