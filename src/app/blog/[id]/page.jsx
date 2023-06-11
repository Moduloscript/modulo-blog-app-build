import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import { notFound } from "next/navigation";



async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,
    { next: { revalidate: 10 } })
  if (!res.ok) {
    return notFound()
  }
 
  return res.json()

}

const BlogPost = async ({ params }) => {
  const data = await  getData(params.id)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eos
            commodi, dolore quisquam illo quos fuga cumque sit cum ipsam,
            assumenda quo odit esse neque accusamus est, eius dignissimos velit?
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quisquam obcaecati, deserunt illum iusto nobis et nesciunt dolore
            nisi eveniet reiciendis repudiandae excepturi nulla quas sequi
            beatae aut harum explicabo.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/5774802/pexels-photo-5774802.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Stone</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum vitae
          provident animi voluptatum inventore esse molestias maiores, delectus
          aut alias ut veritatis, quia iusto odit odio necessitatibus voluptates
          aliquam ea!
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
