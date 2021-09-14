import { db } from "./FirebaseConfig"

export const addNotes = (note) => {
    db.collection("Notes").add(note)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

}

export const getNotes = (estadoNotas) => {
    db.collection("Notes").onSnapshot((querySnapshot) => {
        const notes = [];
        querySnapshot.forEach((doc) => {
            notes.push({ ...doc.data(), id: doc.id });

        });
        return estadoNotas(notes)
    });
}

export const deleteNotes = (idNote) => {
    db.collection("Notes").doc(idNote).delete().then(() => {
        console.log("Document successfully deleted!");
        alert("Nota eliminada satisfactoriamente")
    }).catch((error) => {
        console.error("Error removing document: ", error);
    });
}

export const updateNotes = (note) => {
    db.collection("Notes").doc(note).update().then(() => {
        console.log("Nota actualizada")
    })
}

// export const addNotes = (note, id) => {
    //     try {
    //         if (id === "") {
    //             db.collection("Notes").add(note)
    //                 .then((docRef) => {
    //                     console.log("Document written with ID: ", docRef.id);
    //                 })
    //         } else {
    //             db.collection("Notes").doc(id).update(note).then(() => {
    //                 console.log("Nota actualizada")
    //             })
    //         }
    //     }
    //     catch (error) {
    //         console.error("Error adding document: ", error);
    //     };

    // }
