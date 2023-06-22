import { Header } from './components/Header';
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>

      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post
        author="Diego Fernandes"
        content="Este é um post bem interessante"
      />
      <Post
        author="Gian Dutra"
        content="Poderia ser um post melhor..."
      />
        </main>
      </div>
    </div>
  );
}

