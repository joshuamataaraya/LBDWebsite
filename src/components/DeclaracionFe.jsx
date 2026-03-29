import { useState } from 'react';

const creencias = [
  {
    titulo: 'Acerca de Dios y la Trinidad',
    texto: 'En la unidad de la Divinidad hay tres personas de una sustancia, poder y eternidad; Dios Padre, Dios Hijo y Dios Espíritu Santo. El Padre no es engendrado ni procede de nadie; el Hijo es eternamente engendrado del Padre, y el Espíritu Santo procede eternamente del Padre y del Hijo.',
  },
  {
    titulo: 'Acerca de la Biblia',
    texto: 'Creemos que la Biblia es la palabra inspirada por Dios, preservada por Dios, inerrante e infalible (los 66 libros que la componen). Inerrante por cuanto no contiene errores y su información es veraz e infalible por cuanto no puede conducir a nadie al error. La Biblia es nuestra única fuente de autoridad, nuestra regla de fe y práctica. Se nos dio para que podamos conocer y amar a Dios, entender el don de la salvación que Jesucristo nos ofrece y que es nuestra fuente de crecimiento espiritual.',
  },
  {
    titulo: 'Acerca de la Humanidad',
    texto: 'Creemos que el primer hombre y la primera mujer fueron creados a imagen de Dios y, por lo tanto, todos los humanos tienen un gran valor para Dios. Pero cuando la primera pareja cayó en pecado, desobedeciendo la palabra de Dios, trajeron muerte física y espiritual a toda la humanidad. Como resultado, todos los seres humanos nacen con una naturaleza pecaminosa (muertos espiritualmente), cometen actos de pecado en sus vidas y deben reconciliarse con Dios (arrepentirse y creer) a través de la obra de Jesucristo.',
  },
  {
    titulo: 'Acerca de la Salvación',
    texto: 'Creemos que la salvación es solo por la gracia de Dios (no por obras) sobre la base de la obra terminada de Jesucristo en la cruz y en su resurrección. Creemos que la salvación consiste en un nuevo nacimiento espiritual y está disponible para cualquier persona que se arrepienta de su pecado, renuncie a sí mismo y crea en su corazón y confiese con su boca que Jesucristo es el Señor.',
  },
  {
    titulo: 'Acerca de la Seguridad Eterna',
    texto: 'Creemos que, porque Dios nos da vida eterna a través de Cristo Jesús, el creyente está seguro en esa salvación por la eternidad. La salvación no se puede perder. La salvación se obtiene y mantiene por gracia y poder de Dios.',
  },
  {
    titulo: 'Acerca de la Iglesia',
    texto: 'Creemos que una iglesia local es una congregación de creyentes salvos, bautizados, asociados por un pacto en la fe y la comunión del evangelio, quienes observan las ordenanzas de Cristo y están regidos por sus leyes. Creemos que la iglesia local debe ser testimonio al mundo (evangelizando y discipulando). El ministerio, la adoración y la enseñanza de cada iglesia local deben proyectarse para alcanzar a la comunidad y edificar a la iglesia, sin comprometer los absolutos bíblicos, dándole la gloria a Dios.',
  },
  {
    titulo: 'El Bautismo',
    texto: 'Creemos que el bautismo es el primer acto de obediencia al seguir al Señor. Es tipo (cuadro) de la muerte, sepultura y resurrección de Jesucristo. Es un testimonio público del nuevo creyente quien se identifica con Cristo Jesús a través de la muerte, sepultura y resurrección, que fue la manera en que fue salvo. Esto le identifica con el Señor Jesucristo.',
  },
  {
    titulo: 'La Cena del Señor',
    texto: 'Creemos que la Biblia declara que la Cena del Señor es una comida instituida por el Señor Jesucristo para recordar la noche antes de ser entregado a ser crucificado. La Cena simboliza la muerte de Cristo y su sangre que fue derramada en expiación (pago de la deuda) por el pecado. La Cena del Señor es un cuadro (un símbolo). Los elementos no cambian de sustancia. Son pan y vino, nada más.',
  },
  {
    titulo: 'Acerca del Fin de los Tiempos',
    texto: 'Creemos en el regreso físico y literal de Jesucristo a la tierra con poder y gran gloria para juzgar al mundo y reinar.',
  },
  {
    titulo: 'Acerca del Juicio',
    texto: 'Creemos que todos los hombres pasarán la eternidad ya sea con Cristo o eternamente separados de Él. Creemos que los perdidos que mueren esperan en un infierno literal para el día del juicio final en el que serán asignados al grado adecuado de castigo en un lago literal de fuego (Apocalipsis 20:11-15). Creemos que los que han aceptado a Cristo como Salvador experimentarán una resurrección corporal a la vida eterna.',
  },
  {
    titulo: 'Acerca de la Eternidad',
    texto: 'Creemos que el ser humano fue creado para existir para siempre. Existimos separados de Dios por el pecado o unidos eternamente con Dios por su perdón y salvación. La separación eterna de Dios es el infierno. El vivir en unión eterna con Él es la vida eterna. El cielo y el infierno son lugares reales para una existencia eterna.',
  },
  {
    titulo: 'La Santificación',
    texto: 'Creemos que la santificación es el proceso por el cual, de acuerdo con la voluntad de Dios, se nos hace partícipes de su santidad. Que es una obra progresiva que se comienza en la regeneración y que se lleva a cabo en los corazones de los creyentes por la presencia y el poder del Espíritu Santo, como el Consolador y quien nos sella para Dios; y quien de continuo usa de los medios señalados, especialmente la palabra de Dios.',
  },
  {
    titulo: 'Del Gobierno Civil',
    texto: 'Creemos que Dios, el Supremo Señor y Rey de todo el mundo, ha instituido a los magistrados civiles para estar sujetos a Él, gobernando al pueblo para la gloria de Dios y el bien público; y con este fin les ha armado con el poder de la espada, para la defensa y aliento de los que son buenos, y para el castigo de los malhechores. Es el deber de la iglesia orar por los magistrados, honrarlos, pagar los impuestos, obedecer sus mandatos legales y estar sujetos a su autoridad por causa de la conciencia.',
  },
  {
    titulo: 'Disciplina en la Iglesia',
    texto: 'Creemos que la disciplina en la iglesia es una práctica totalmente bíblica. La Biblia enseña que debe haber lineamientos básicos para los miembros de la iglesia local, establecidos para la gloria de Dios y cuando esos lineamientos, principalmente de testimonio y compromiso con Dios a través de la iglesia no están bien, se debe llamar a quien no los esté obedeciendo para ayudar a corregir en arrepentimiento y seguir adelante. Siempre buscando la restauración y la reconciliación con el Hijo de Dios.',
  },
  {
    titulo: 'Misiones Transculturales',
    texto: 'Creemos en las misiones transculturales porque la Gran Comisión del Señor Jesucristo establece "hacer discípulos a todas las naciones" Mateo 28:18-20. Es decir, a todos los pueblos, razas, culturas, lenguas, grupos humanos y gente de toda la tierra. Por lo tanto, tenemos una gran carga por los menos alcanzados con el evangelio de Jesucristo.',
  },
  {
    titulo: 'Acerca del Bautismo de Niños',
    texto: 'La Escritura es bastante clara en que sólo los creyentes deben ser bautizados. La edad para su bautismo no se menciona directamente en la Escritura. Por esto entendemos la conveniencia de un nivel de madurez de los candidatos al bautismo. Creemos que la edad de bautismo debe ser cuando la certeza de la conversión de una persona es evidente para la comunidad de la iglesia.',
  },
  {
    titulo: 'Predicación Expositiva',
    texto: 'Predicamos expositivamente porque es la única forma de ser fieles al texto en su contexto. Una predicación que no toma en cuenta el contexto no es bíblica. No predicamos técnicamente expositivamente, pero sí estamos intentando exponer la palabra de Dios en libros completos, apegados al contexto y entendiendo que la mejor forma de explicar y estudiar la Biblia es a través de la misma Biblia.',
  },
];

function AccordionItem({ item, isOpen, toggle, index }) {
  const panelId = `fe-panel-${index}`;
  const headerId = `fe-header-${index}`;
  return (
    <div className={`accordion__item${isOpen ? ' accordion__item--open' : ''}`}>
      <button
        id={headerId}
        className="accordion__header"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span>{item.titulo}</span>
        <span className="accordion__chevron">{isOpen ? '−' : '+'}</span>
      </button>
      <div
        id={panelId}
        className="accordion__body"
        role="region"
        aria-labelledby={headerId}
        style={{ maxHeight: isOpen ? '1000px' : '0' }}
      >
        <p>{item.texto}</p>
      </div>
    </div>
  );
}

export default function DeclaracionFe() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="fe" className="section declaracion">
      <div className="container">
        <h2 className="section__title reveal">Declaración de Fe</h2>
        <div className="accordion reveal">
          {creencias.map((c, i) => (
            <AccordionItem
              key={i}
              item={c}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
