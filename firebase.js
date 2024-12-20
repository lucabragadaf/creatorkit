const firebaseConfig = {
  apiKey: "AIzaSyCpHjE_Qj5U6vodewnu2YJ8Ewur83RXmt4",
  authDomain: "creatorkit-304c3.firebaseapp.com",
  projectId: "creatorkit-304c3",
  storageBucket: "creatorkit-304c3.firebasestorage.app",
  messagingSenderId: "1037017138316",
  appId: "1:1037017138316:web:6b7c534406e1704d3267a9",
  measurementId: "G-7J6G00E485"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = firebase.getAnalytics(app);
const db = firebase.getFirestore(app);

// Function to save data to Firestore
async function saveDataToFirestore(title, subtitle, links) {
  try {
    await addDoc(collection(db, "userInputs"), {
      title: title,
      subtitle: subtitle,
      links: links,
      createdAt: new Date()
    });
    console.log("Data saved to Firestore");
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}