// ใส่ค่าจาก Firebase Console > Project settings > Your apps (Web app)
// CAREDER_FIREBASE: ถ้าใส่ แอปจะส่ง SMS OTP จริง (ต้องเปิด Phone sign-in) ถ้าเว้นว่างจะอยู่ใน "โหมดทดลอง" ใช้รหัส 123456
window.CAREDER_FIREBASE = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  appId: ""
};
// CAREDER_CLOUD: ฐานข้อมูลกลางสำหรับ Care Community (Firestore + Anonymous sign-in)
window.CAREDER_CLOUD = {
  apiKey: "AIzaSyCCCe47f1ICf3iRzrMUu_iDGKRVf9asB-E",
  authDomain: "careder-bb863.firebaseapp.com",
  projectId: "careder-bb863",
  appId: "1:706720713435:web:46c0fc0f9d6a203b461afe"
};
