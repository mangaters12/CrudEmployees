Test API : 
=========================================================
// Use auth routes for authentication endpoints
app.use('/api/users/', userRoutes);
// Use auth routes for authentication endpoints
app.use('/api/auth', authRoutes);
// Use profile routes for profile endpoints
app.use('/api/profileRoutes', profileRoutes);
// Use biodata routes for biodata endpoints
app.use('/api/biodata', biodataRoutes);
http://localhost:5000/api/auth/login
http://localhost:5000/api/auth/register
http://localhost:5000/api/biodata
http://localhost:5000/api/biodata/${id}
http://localhost:5000/api/auth/register
============================================================

Routes Endpoint :
============================================================
<Route path="/signup" element={<Signup />} />
<Route path="/login" element={<Login />} />
<Route path="/admin" element={<AdminPanel />} />
<Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} />
<Route path="/biodata" element={<EntryBiodata />} />
<Route path="/detail/:id" element={<DetailBiodata />} />
<Route path="/add" element={<AddBiodata />} />
<Route path="/edit/:id" element={<EditBiodata />} />
============================================================

biodata app files frontend cara start npm install, npm start
testbaru files backend cara start npm install node app.js
db name biodata_db
============================================================


Login Page
![image](https://github.com/user-attachments/assets/1a2e89e9-17d6-4383-9cc8-679bbe680dd8)

Register Page
![image](https://github.com/user-attachments/assets/ef8bbd96-2338-47be-98ff-4bc32814dc63)

Dashboard 
![image](https://github.com/user-attachments/assets/a9774c2f-e56a-44f7-87e1-19a013ba078b)

Crud Add
![image](https://github.com/user-attachments/assets/eecf6bb3-7d76-4b4b-9e38-140c20e64693)

Crud Del
![image](https://github.com/user-attachments/assets/fe6d8882-d68c-4ebf-a44e-bfc6ae4f7f4b)

Crud Update
![image](https://github.com/user-attachments/assets/f119e27f-cbbf-4c6c-9f64-1e001bd0da05)

Details Page
![image](https://github.com/user-attachments/assets/3bbc8d10-c5ee-48f5-9706-29c47470b095)
![image](https://github.com/user-attachments/assets/306e4690-34eb-40f5-932e-18c694d4b2ca)
![image](https://github.com/user-attachments/assets/48778359-f014-4777-9d12-c38398b1a21d)

Pictures db
![image](https://github.com/user-attachments/assets/b52b45fe-c44f-490c-a3da-a505f0bf70b8)
![image](https://github.com/user-attachments/assets/edac63e5-4a25-483d-8f3e-08aad4ab9f9a)
![image](https://github.com/user-attachments/assets/06e95868-aeef-4558-8ffc-2508bbbc0897)
![image](https://github.com/user-attachments/assets/5326b326-31b5-4539-b3b5-ccfca2987306)

