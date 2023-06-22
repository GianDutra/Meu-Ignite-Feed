import styles from './Post.module.css';
import fotoPerfil from '../assets/meuPerfil.png';
import { Comment } from './Comment';
import { Avatar } from './Avatar';


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src={fotoPerfil}/>
          <div className={styles.authorInfo}>
            <strong>Gian Dutra</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time title="11 de Maio às 8:13h" dateTime="2022-05-11 08:13:03">Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Acabei de subir mais um projeto no meu portfÃ³lio, um projeto que fiz no NLW Return, evento da Rocketseat.</p>
        <p> <a href="">jane.design/doctorcare</a></p>
        <p> 
                <a href="">#novoprojeto</a>{' '}
                <a href=''>#nlw</a>{' '}
                <a href=''>#rocketseat</a>
                </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário"></textarea>

        <footer><button type="submit">Publicar</button></footer>

    </form>

    <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
    </div>

    </article>
  );
}