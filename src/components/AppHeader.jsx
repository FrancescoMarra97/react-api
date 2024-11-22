export default function AppHeader({ children }) {


    return (
        <header>
            <div>
                <h1 className='m-4'>New Article</h1>
            </div>
            {children}
        </header>
    )
}