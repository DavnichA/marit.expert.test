import React from 'react';
import style from './HomePage.module.css';
import hum_img from '../../img/hum.jpg';
import elf_img from '../../img/elf.jpg';
import dworf_img from '../../img/dworf.jpg';
import hobb_img from '../../img/hobbit.jpg';



const HomePage = (props) => {


    return (
        <div className={style.wrap}>

            {props.human.map(hm => (
                <div key={hm.id} className={style.humans}>
                    <div className={style.header}>
                        <h2>Human</h2>
                        <button><i className="fas fa-plus"></i></button>
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            <div className={style.avatar}><img src={hum_img} alt="avatar"/></div>
                            <p>Id: {hm.id}</p>
                            <p>{hm.name}</p>
                        </div>
                        <div className={style.btn_profile}>
                            <button className={style.btn_edit}><i className='fas fa-edit'></i></button>
                            <button className={style.btn_del}><i className='fas fa-trash'></i></button>
                        </div>
                    </div>
                </div>
            ))}

            {props.elf.map(el => (
                <div key={el.id} className={style.elfs}>
                    <div className={style.header}>
                        <h2>Elf</h2>
                        <button><i className="fas fa-plus"></i></button>
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            <div className={style.avatar}><img src={elf_img} alt="avatar"/></div>
                            <p>Id: {el.id}</p>
                            <p>{el.name}</p>
                        </div>
                        <div className={style.btn_profile}>
                            <button className={style.btn_edit}><i className='fas fa-edit'></i></button>
                            <button className={style.btn_del}><i className='fas fa-trash'></i></button>
                        </div>
                    </div>
                </div>
            ))}

            {props.dworf.map(dw => (
                <div key={dw.id} className={style.dworfs}>
                    <div className={style.header}>
                        <h2>Dworf</h2>
                        <button><i className="fas fa-plus"></i></button>
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            <div className={style.avatar}><img src={dworf_img} alt="avatar"/></div>
                            <p>Id: {dw.id}</p>
                            <p>{dw.name}</p>
                        </div>
                        <div className={style.btn_profile}>
                            <button className={style.btn_edit}><i className='fas fa-edit'></i></button>
                            <button className={style.btn_del}><i className='fas fa-trash'></i></button>
                        </div>
                    </div>
                </div>
            ))}

            {props.hobbit.map(hb => (
                <div key={hb.id} className={style.hobbits}>
                    <div className={style.header}>
                        <h2>Hobbit</h2>
                        <button><i className="fas fa-plus"></i></button>
                    </div>
                    <div className={style.info}>
                        <div className={style.name}>
                            <div className={style.avatar}><img src={hobb_img} alt="avatar"/></div>
                            <p>Id: {hb.id}</p>
                            <p>{hb.name}</p>
                        </div>
                        <div className={style.btn_profile}>
                            <button className={style.btn_edit}><i className='fas fa-edit'></i></button>
                            <button className={style.btn_del}><i className='fas fa-trash'></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default HomePage;