const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');
const functions = require('firebase-functions');

const app = express();

let intialPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(intialPath));

// Membaca file JSON yang berisi data pengguna
const usersFilePath = path.join(__dirname, '/assets/json/awokwa.json');

// Melayani file statis di folder 'public' dan 'assets'
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // Ini untuk melayani file dalam /assets

// Fungsi untuk membaca file JSON
const readUsersFromFile = () => {
    const rawData = fs.readFileSync(usersFilePath);
    return JSON.parse(rawData);
};





app.get('/daisekoi-login', (req, res) => {
    res.sendFile(path.join(intialPath, "index.html"));
});

// Endpoint login
app.post('/login-user', (req, res) => {
    const { username, password } = req.body;

    // Cek apakah username yang diberikan ada di dalam file JSON
    const users = readUsersFromFile();
    const user = users.find(user => user.username === username);

    if (user) {
        // Jika user ditemukan, kita verifikasi password yang di-hash
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json('An error occurred');
            }

            if (result) {
                res.json({ name: user.nama, username: user.username });
            } else {
                res.json('Username or password is incorrect');
            }
        });
    } else {
        res.json('Username or password is incorrect');
    }
});

// Endpoint untuk menambah pengguna
app.post('/api/users', async (req, res) => {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    fs.readFile('./assets/json/awokwa.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        const users = JSON.parse(data);
        users.push({ username, email, role, password: hashedPassword });

        fs.writeFile('./assets/json/awokwa.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.status(201).send('User  added');
        });
    });
});

// Endpoint untuk menghapus pengguna
app.delete('/api/users/:username', (req, res) => {
    const { username } = req.params;

    fs.readFile('./assets/json/awokwa.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file');
        }
        let users = JSON.parse(data);
        users = users.filter(user => user.username !== username);

        fs.writeFile('./assets/json/awokwa.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                return res.status(500).send('Error writing file');
            }
            res.send('User  deleted');
        });
    });
});

exports.app = functions.https.onRequest(app);
// app.listen(5501, () => {
//     console.log('listening on port 5501......');
// });
