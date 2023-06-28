import db from "../db/firebase.connection"
import { query, collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc } from "firebase/firestore"

class AlunosServices {
    
        static list(request, response) {
    
            const q = query(collection(db, "alunos"))
            getDocs(q)
                .then(
                    (querySnapshot) => {
                        const alunos = []
                        querySnapshot.forEach(
                            (aluno) => {
                                const _id = aluno.id
                                const { nome, curso, ira } = aluno.data()
                                alunos.push({ _id, nome, curso, ira })
                            }
                        )
                        response.json(alunos)
                    }
                )
                .catch(error => console.log(error))
    
        }
    
        static register(request, response) {
    
            addDoc(collection(db, "alunos"), request.body)
                .then(
                    (aluno) => {
                        response.json({ _id: aluno.id })
                    }
                )
                .catch(error => console.log(error))
        }
    
        static retrieve(request, response) {
            const docRef = doc(db, "alunos", request.params.id)
            getDoc(docRef)
                .then(
                    (aluno) => {
                        const res = {
                            _id: aluno.id,
                            nome: aluno.data().nome,
                            curso: aluno.data().curso,
                            matricula: aluno.data().matricula,
                            ai: aluno.data().ai
                        }
                        response.json(res)
                    }
                )
                .catch(error => console.log(error))
        }
    
        static update(request, response) {
            const docRef = doc(db, "alunos", request.params.id)
            updateDoc(docRef, request.body)
                .then(() => {
                    //atualizou
                    response.json({ _id: request.params.id })
                })
                .catch(error => console.log(error))
        }
    
        static delete(request, response) {
            const docRef = doc(db, "alunos", request.params.id)
            deleteDoc(docRef)
                .then(() => {
                    //deletou
                    response.json({ _id: request.params.id })
                })
                .catch(error => console.log(error))
        }
        
}

export default AlunosServices