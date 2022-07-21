function NavPage(props) {
    return (
        <header className="navpage">
            <p>Page: {props.page}</p>
            <button className='btn'
                onClick={() => props.setPage(props.page + 1)}
            >
                Page {props.page + 1}
            </button>
        </header>
    );
}

export default NavPage