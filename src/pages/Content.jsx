import MainLayout from "../layout/MainLayout";
import RedirectDiv from "../layout/RedirectDiv";
import Dots from "../layout/Dots";

// function Content() {
//   return (
//     <MainLayout>
//       <div>
//         <div>
//           <h3>Τελευταία νέα - ανακοινώσεις</h3>
//         </div>
//         <div>
//           <h5>Ανακοίνωση για Painschool της EFIC</h5>
//         </div>
//         <div>
//           Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική
//           Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία
//         </div>
//         <h6>
//           Δηλώστε συμμετοχή πριν τη λήξη της προθεσμίας στις 3 Μαρτίου 2023.
//         </h6>
//       </div>
//     </MainLayout>
//   );
// }

// export default Content;

import ReadMore from "./ReadMore";

const articles = [
  {
    title: "Article 1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Article 2",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Article 3",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

const Content = () => (
  <>
    <MainLayout>
      <div>
        {articles.map(({ title, text }) => (
          <>
            <h2>{title}</h2>
            <ReadMore text={text} />
          </>
        ))}
        <div>
          <h3>Τελευταία νέα - ανακοινώσεις</h3>
        </div>
        <div>
          <h5>Ανακοίνωση για Painschool της EFIC</h5>
        </div>
        <div>
          Σχολείο πόνου της EFIC με θέμα τον Καρκινικό Πόνο και τη Παρηγορική
          Φροντίδα 16-19 Μαϊου 2023, Μπάριμπορ, Σλοβενία
        </div>
        <h6>
          Δηλώστε συμμετοχή πριν τη λήξη της προθεσμίας στις 3 Μαρτίου 2023.
        </h6>
      </div>
    </MainLayout>
  </>
);

export default Content;
