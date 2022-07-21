import './NavPage.css';
function NavPage(props) {

    const prevPage = () => {
        if (props.page > 1) {
            props.setPage(props.page -1)
        }
    }

    const nextPage = () => {
        if (props.page >= 1 && props.page < 42) {
            props.setPage(props.page + 1)
        }
    }
    
    return (

        <header className="navpage">
            <button className='btn slide'
                onClick={prevPage}
            >
                Prev Page
            </button>
            <p className="current-page">Page {props.page}</p>
            <button className='btn slide'
                onClick={nextPage}
            >
                Next Page
            </button>
        </header>
    );
}

export default NavPage