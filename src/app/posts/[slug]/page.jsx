import React from 'react'
import styles from "./single.module.css"
import { Menu } from '@/components'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: "no-store"
  })
 console.log(res);
  if(!res.ok) {
    console.log("Error has occur")
  }
 
  return res.json();
}

const SinglePage = async ({params}) => {
    const {slug} = params;
    const post = await getData(slug);
  
  return (
    <div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.user}>
                    {post?.user?.image && (<div className={styles.userImageContainer}>
                        <Image src={post.user.image} alt='' fill className={styles.avator} />
                    </div>)}
                    <div className={styles.userTextContainer}>
                        <span className={styles.username}>{post?.user.name}</span>
                        <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
                    </div>
                </div>
            </div>

            {post?.img && <div className={styles.imageContainer}>
                 <Image src={post?.img} alt='' fill className={styles.image} />
            </div>}
        </div>
        <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: post?.desc}}/>
                <div className={styles.comments}>
                    <Comments postSlug={post.slug} />
                </div>
            </div>
            <Menu />
        </div>
    </div>
  )
}

export default SinglePage