import s from './search.module.css'



const Search = (obj) => {
    return(
                <div className={s.search}>
                    <div className={s.input}><input type="text" placeholder="Поиск" />
                        <span>sddsds</span>
                    </div>
                </div>
    );
}

export default Search;