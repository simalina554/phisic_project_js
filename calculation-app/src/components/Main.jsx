function Main() {
    function btn_click() {

        let r1 = Number(document.getElementById('r1').value);
        let r2 = Number(document.getElementById('r2').value);
        let e = Number(document.getElementById('e').value);
        let r = Number(document.getElementById('r').value);

        let i = e / (r1 + r2 + r);
        let u1 = i * (r1 + r2);
        let u2 = i * r;
        let u = u1 + u2;
        let p1 = e * i;
        let p2 = (i ** 2) * (r + r1 + r2);

        document.getElementById('i').value = i.toFixed(2);
        document.getElementById('u1').value = u1.toFixed(2);
        document.getElementById('u2').value = u2.toFixed(2);
        document.getElementById('u').value = u.toFixed(2);
        document.getElementById('p1').value = p1.toFixed(2);
        document.getElementById('p2').value = p2.toFixed(2);
    }

    function btn_clean() {
        document.getElementById('r1').value = "";
        document.getElementById('r2').value = "";
        document.getElementById('e').value = "";
        document.getElementById('r').value = "";
        
        document.getElementById('i').value = "";
        document.getElementById('u1').value = "";
        document.getElementById('u2').value = "";
        document.getElementById('u').value = "";
        document.getElementById('p1').value = "";
        document.getElementById('p2').value = "";
    }
    return (
        <section>
            <div className="btn">
                <img src="/img/img_1.png" alt="circle" />
                <div className="btn_group">
                <button onClick={btn_click}>Расчет</button>
                <button onClick={btn_clean}>Сброс</button></div>
            </div>
            <div className="data">
                <h1>Данные</h1>

                <div className="r1"><label htmlFor="R1">R1</label><input id="r1" type="number" /><label htmlFor="R1">Ом</label></div>
                <div className="r2"><label htmlFor="R2">R2</label><input id="r2" type="number" /><label htmlFor="R2">Ом</label></div>
                <div className="e"><label htmlFor="E">E</label><input id="e" type="number" /><label htmlFor="E">В</label></div>
                <div className="r"><label htmlFor="r">r</label><input id="r" type="number" /><label htmlFor="r">Ом</label></div>
            </div>
            <div className="sum">
                <h1>Расчеты</h1>

                <div className="i"><label htmlFor="I">I=I1=I2</label><input id="i" type="number" disabled /><label htmlFor="I">А</label></div>
                <div className="u1"><label htmlFor="U1">U1</label><input id="u1" type="number" disabled /><label htmlFor="U1">В</label></div>
                <div className="u2"><label htmlFor="U2">U2</label><input id="u2" type="number" disabled /><label htmlFor="U2">В</label></div>
                <div className="u"><label htmlFor="U">U</label><input id="u" type="number" disabled /><label htmlFor="U">В</label></div>
                <div className="p1"><label htmlFor="P1">P1(приемника)</label><input id="p1" type="number" disabled /><label htmlFor="P1">Вт</label></div>
                <div className="p2"><label htmlFor="P2">P2(источника)</label><input id="p2" type="number" disabled /><label htmlFor="P2">Вт</label></div>
            </div>
        </section>
    )
}

export default Main;