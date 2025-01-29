const LinkButton = () => {
    return (
        <a href="https://github.com/Machahary07/unclickable" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <button style={styles.button}>
                Source Code
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" style={styles.icon} />
            </button>
        </a>
    );
};

const styles = {
    link: {
        textDecoration: 'none',
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#333',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        position: 'fixed' as const,
        bottom: '10px',
        right: '10px',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginLeft: '10px',
    },
};

export default LinkButton;
