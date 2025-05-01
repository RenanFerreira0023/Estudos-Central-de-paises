
type GridProps = {
    children: React.ReactNode;
}

const Grid = ({ children }: GridProps) => {
    return (
        <div className='grid grid-cols-4 md:grid-cols-5 lg:grid-cols-lg gap-6 '>
            {children}
        </div>
    );
};

export default Grid;

