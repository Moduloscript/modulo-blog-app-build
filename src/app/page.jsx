import Image from "next/image";
import Hero from "public/hero.png";
import styles from "./page.module.css";
import Button from "../components/Button/button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Beta Design for Una Digital Products.</h1>
        <p className={styles.desc}>
          Turning Your Idea into reality. We bring Together the Teams for Global
          Reach in Technology
        </p>
       <Button url="/portfolio" text="See Our Works"/>
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
};

export default Home;
