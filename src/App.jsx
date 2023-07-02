import { Header } from './components/Header';
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar';

const posts = [
  { 
    id: 1,
    author: {
      avatarUrl: 'https://github.com/GianDutra.png',
      name: 'Gian Dutra',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfolio. Mais um projeto que fiz no React com Gsap.' },
      { type: 'link', content: 'meu-portfolio-giandutra.vercel.app' },
    ], publishedAt: new Date('2023-06-28 20:00:00'),
  },
  { 
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. Mais um projeto que fiz no NLW React.' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ], publishedAt: new Date('2023-06-25 20:00:00'),
  }
];


export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        {posts.map(post => (
    <Post
      author={post.author}
      content={post.content}
      publishedAt={post.publishedAt}
    />
  ))}
        </main>
      </div>
    </div>
  );
}

