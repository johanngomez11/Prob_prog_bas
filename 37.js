//37.-Cargar las notas de los alumnos de un colegio en función del número de cursos y del número
//de alumnos por curso.
function generarNotas(numCursos, numAlumnosPorCurso) {
    const notas = [];
    for (let i = 0; i < numCursos; i++) {
        const curso = [];
        for (let j = 0; j < numAlumnosPorCurso; j++) {
            // Generar una nota aleatoria entre 0 y 100 para cada alumno
            const nota = Math.floor(Math.random() * 101);
            curso.push(nota);
        }
        notas.push(curso);
    }
    return notas;
}

function imprimirNotas(notas) {
    console.log("\nNotas de los alumnos:");
    for (let i = 0; i < notas.length; i++) {
        console.log("Curso " + (i + 1) + ": " + notas[i].join(', '));
    }
}

const numCursos = 5;
const numAlumnosPorCurso = 11;

const notas = generarNotas(numCursos, numAlumnosPorCurso);

imprimirNotas(notas);
