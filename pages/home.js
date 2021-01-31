import Header from "../components/header";
import Menu from "../components/menu";
import Contents from "../components/content";

export default function HomePage({ data }) {
  return (
    <div>
      <Header />
      <Menu />
      {data.menu.map((singleData, index) => <Contents key={index} id={index} singleData={singleData} />)}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://themidtowncafe.com/api/hello');
  const data = await res.json();
  return {
    props: {
      data
    }
  }
}