import style from './DashBoard.module.css'


function DashBoard() {

    return (
        <div className={style.Container}>
            <div className={style.ContainerElement}>
                <p>Teste</p>
            </div>
            <div className={style.ContainerElement}>
                <p>Teste2</p>
            </div>
            <div className={style.ContainerElement}>
                <p>Teste3</p>
            </div>
        </div>
    )

}

export default DashBoard