import styles from "./homepage.module.css";
import { Featured, CategoryList, Menu, CardList } from "@/components"

export default function Home({ searchParams }) {
  const page = parseInt(searchParams.page) || 1;
  return (
  <div className={styles.container}>
    <Featured/>
    <CategoryList/>
    <div className={styles.content}>
      <CardList page={page} />
      <Menu />
    </div>
  </div>
  );
}
