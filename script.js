// script.js completo con todos los semestres y prerrequisitos

const ramos = [
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE TEATRO CREATIVO", semestre: 1 },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS CULTURALES I", semestre: 1 },
  { nombre: "INGLES ORAL: PRONUNCIACION, ENTONACION Y EXPRESION I", semestre: 1 },
  { nombre: "USO DE TECNOLOGIA PARA LA COMUNICACION GLOBAL I", semestre: 1 },
  { nombre: "COMUNICACION ORAL Y ESCRITA I", semestre: 1 },
  { nombre: "DEPORTE I", semestre: 1 },

  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE LITERATURA INFANTIL", semestre: 2, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE TEATRO CREATIVO"] },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS CULTURALES II", semestre: 2, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS CULTURALES I"] },
  { nombre: "INGLES ORAL: PRONUNCIACION, ENTONACION Y EXPRESION II", semestre: 2, requisitos: ["INGLES ORAL: PRONUNCIACION, ENTONACION Y EXPRESION I"] },
  { nombre: "USO DE TECNOLOGIA PARA LA COMUNICACION GLOBAL II", semestre: 2, requisitos: ["USO DE TECNOLOGIA PARA LA COMUNICACION GLOBAL I"] },
  { nombre: "COMUNICACION ORAL Y ESCRITA II", semestre: 2, requisitos: ["COMUNICACION ORAL Y ESCRITA I"] },
  { nombre: "DEPORTE II", semestre: 2, requisitos: ["DEPORTE I"] },

  { nombre: "CREACION DE UN AMBIENTE EN INGLES PARA PRINCIPIANTES", semestre: 3, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE LITERATURA INFANTIL"] },
  { nombre: "PRACTICA DE OBSERVACION 1", semestre: 3 },
  { nombre: "EL ROL DE PROFESOR EN EL CONTEXTO EDUCATIVO", semestre: 3 },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS DE EVENTOS MUNDIALES I", semestre: 3, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS CULTURALES II"] },
  { nombre: "AUTOGESTION DEL APRENDIZAJE", semestre: 3 },
  { nombre: "LINGUISTICA ESPAÑOLA APLICADA", semestre: 3, requisitos: ["COMUNICACION ORAL Y ESCRITA II"] },

  { nombre: "CREACION Y BUSQUEDA DE RECURSOS PARA EL AULA", semestre: 4, requisitos: ["CREACION DE UN AMBIENTE EN INGLES PARA PRINCIPIANTES"] },
  { nombre: "PLANIFICACION Y MANEJO DEL CURSO", semestre: 4, requisitos: ["CREACION DE UN AMBIENTE EN INGLES PARA PRINCIPIANTES"] },
  { nombre: "PRACTICA DE OBSERVACION 2", semestre: 4, requisitos: ["PRACTICA DE OBSERVACION 1"] },
  { nombre: "EL CURRICULUM PARA INGLES Y RECURSOS EN LA EDUCACION CHILENA", semestre: 4, requisitos: ["EL ROL DE PROFESOR EN EL CONTEXTO EDUCATIVO"] },
  { nombre: "APRENIZAJE DEL INGLES A TRAVES DE ESTUDIOS DE EVENTOS MUNDIALES II", semestre: 4, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS DE EVENTOS MUNDIALES I"] },
  { nombre: "PREPARACION Y RENDICION EXAMEN IDIOMA INGLES MCER B2", semestre: 4, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE ESTUDIOS DE EVENTOS MUNDIALES I"] },
  { nombre: "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES", semestre: 4, requisitos: ["AUTOGESTION DEL APRENDIZAJE"] },

  { nombre: "METODOS EN LA ENSEÑANZA DEL IDIOMA INGLES", semestre: 5, requisitos: ["PREPARACION Y RENDICION EXAMEN IDIOMA INGLES MCER B2", "CREACION Y BUSQUEDA DE RECURSOS PARA EL AULA"] },
  { nombre: "EVALUACION DEL APRENDIZAJE", semestre: 5, requisitos: ["PREPARACION Y RENDICION EXAMEN IDIOMA INGLES MCER B2", "PLANIFICACION Y MANEJO DEL CURSO"] },
  { nombre: "PRACTICA INICIAL", semestre: 5, requisitos: ["PREPARACION Y RENDICION EXAMEN IDIOMA INGLES MCER B2", "PRACTICA DE OBSERVACION 2"] },
  { nombre: "INTRODUCCION A LA METODOLOGIA DE LA INVESTIGACION", semestre: 5, requisitos: ["PREPARACION Y RENDICION EXAMEN IDIOMA INGLES MCER B2"] },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE LA LITERATURA UNIVERSAL I", semestre: 5, requisitos: ["PREPARACION Y RENDICION EXAMEN IDIOMA INGLES MCER B2", "APRENIZAJE DEL INGLES A TRAVES DE ESTUDIOS DE EVENTOS MUNDIALES II"] },
  { nombre: "COMPRENSION DE CONTEXTOS SOCIALES", semestre: 5, requisitos: ["COMUNICACION ORAL Y ESCRITA II"] },

  { nombre: "ADQUISICION DE LA PRIMERA Y SEGUNDA LENGUA", semestre: 6, requisitos: ["METODOS EN LA ENSEÑANZA DEL IDIOMA INGLES"] },
  { nombre: "ENSEÑANZA Y EVALUACION DE LA LECTURA", semestre: 6, requisitos: ["EVALUACION DEL APRENDIZAJE"] },
  { nombre: "PRACTICA INTENSIVA 1", semestre: 6, requisitos: ["PRACTICA INICIAL", "EVALUACION DEL APRENDIZAJE", "METODOS EN LA ENSEÑANZA DEL IDIOMA INGLES"] },
  { nombre: "INVESTIGACION CUALITATIVA Y CUANTITATIVA", semestre: 6, requisitos: ["INTRODUCCION A LA METODOLOGIA DE LA INVESTIGACION"] },
  { nombre: "ORIENTACION DEL ADOLESCENTE", semestre: 6, requisitos: ["EL ROL DE PROFESOR EN EL CONTEXTO EDUCATIVO"] },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE LA LITERATURA UNIVERSAL II", semestre: 6, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE LA LITERATURA UNIVERSAL I"] },
  { nombre: "COMPRENSION DE CONTEXTOS CULTURALES", semestre: 6, requisitos: ["COMPRENSION DE CONTEXTOS SOCIALES"] },

  { nombre: "PSICOLOGIA DEL APRENDIZAJE DEL ADOLESCENTE", semestre: 7, requisitos: ["ORIENTACION DEL ADOLESCENTE", "ADQUISICION DE LA PRIMERA Y SEGUNDA LENGUA"] },
  { nombre: "INCLUSION: RESPUESTA A NECESIDADES ESPECIALES", semestre: 7, requisitos: ["ENSEÑANZA Y EVALUACION DE LA LECTURA"] },
  { nombre: "PRACTICA DE INVESTIGACION-ACCION", semestre: 7, requisitos: ["INVESTIGACION CUALITATIVA Y CUANTITATIVA"] },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE TEMAS GLOBALES", semestre: 7, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE LA LITERATURA UNIVERSAL II"] },
  { nombre: "CONOCIMIENTO DEL LENGUAJE: ANALISIS DEL IDIOMA INGLES", semestre: 7, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE LA LITERATURA UNIVERSAL II"] },
  { nombre: "ETICA Y RESPONSABILIDAD SOCIAL", semestre: 7, requisitos: ["COMPRENSION DE CONTEXTOS CULTURALES", "TRABAJO EN EQUIPO Y DESARROLLO DE HABILIDADES SOCIALES"] },

  { nombre: "EVALUACION DE RECURSOS DE LA ENSEÑANZA DEL INGLES", semestre: 8, requisitos: ["PSICOLOGIA DEL APRENDIZAJE DEL ADOLESCENTE"] },
  { nombre: "PRACTICA INTENSIVA 2", semestre: 8, requisitos: ["PRACTICA DE INVESTIGACION-ACCION", "PRACTICA INTENSIVA 1"] },
  { nombre: "PROYECTO DE GRADO", semestre: 8, requisitos: ["PRACTICA DE INVESTIGACION-ACCION"] },
  { nombre: "PRACTICA DE CONSEJO DE CURSO", semestre: 8, requisitos: ["ORIENTACION DEL ADOLESCENTE"] },
  { nombre: "APRENDIZAJE DEL INGLES A TRAVES DE TEMAS GLOBALES EN EDUCACION", semestre: 8, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE TEMAS GLOBALES"] },
  { nombre: "CONOCIMIENTO DEL LENGUAJE: ANALISIS CONTRASTIVO", semestre: 8, requisitos: ["CONOCIMIENTO DEL LENGUAJE: ANALISIS DEL IDIOMA INGLES"] },
  { nombre: "RESPONSABILIDAD SOCIAL", semestre: 8, requisitos: ["ETICA Y RESPONSABILIDAD SOCIAL"] },

  { nombre: "TOPICOS EDUCACIONALES: SEMINARIOS DIRIGIDOS POR ESTUDIANTES", semestre: 9, requisitos: ["EVALUACION DE RECURSOS DE LA ENSEÑANZA DEL INGLES"] },
  { nombre: "PRACTICA PROFESIONAL", semestre: 9, requisitos: ["PRACTICA INTENSIVA 2"] },
  { nombre: "ESCRITURA AVANZADA EN TEMAS DE EDUCACION", semestre: 9, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE TEMAS GLOBALES EN EDUCACION"] },
  { nombre: "LECTURA AVANZADA EN TEMAS DE EDUCACION", semestre: 9, requisitos: ["APRENDIZAJE DEL INGLES A TRAVES DE TEMAS GLOBALES EN EDUCACION"] },
];

let aprobados = new Set();

function crearMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  const maxSemestre = Math.max(...ramos.map(r => r.semestre));

  for (let i = 1; i <= maxSemestre; i++) {
    const divSem = document.createElement("div");
    divSem.className = "semestre";
    divSem.innerHTML = `<h2>Semestre ${i}</h2>`;

    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const btn = document.createElement("div");
      btn.className = "ramo";
      btn.textContent = ramo.nombre;

      if (!estaDesbloqueado(ramo)) {
        btn.classList.add("bloqueado");
      }

      if (aprobados.has(ramo.nombre)) {
        btn.classList.remove("bloqueado");
        btn.classList.add("aprobado");
        btn.textContent += " ✅";
      }

      btn.onclick = () => {
        if (!estaDesbloqueado(ramo)) return;
        if (aprobados.has(ramo.nombre)) {
          aprobados.delete(ramo.nombre);
        } else {
          aprobados.add(ramo.nombre);
        }
        crearMalla();
      };

      divSem.appendChild(btn);
    });

    contenedor.appendChild(divSem);
  }
}

function estaDesbloqueado(ramo) {
  if (!ramo.requisitos || ramo.requisitos.length === 0) return true;
  return ramo.requisitos.every(req => aprobados.has(req));
}

crearMalla();
