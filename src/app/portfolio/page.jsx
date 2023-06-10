import Link from 'next/link'
import React from 'react'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose A gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations">
    <span></span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio
