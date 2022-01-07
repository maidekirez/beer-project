import React from 'react'

export default function Footer() {
    return (
        <footer className=" bg-dark  mt-5 py-5">
            <div className="container">
                <div className="row  pb-4">
                    <div className="col-6 pb-3">
                        <h5 className="text-light">Team Member</h5>
                        <ul className='list-unstyled mt-3'>
                            <li className="text-light">
                                <p>
                                    Maide KIRAZ : maidekiraz@gmail.com
                                </p>
                            </li>
                            <li className="text-light"><p>
                                Naşide YILDIRIM : naside.yldrm21@gmail.com
                            </p>
                            </li>
                            <li className="text-light"><p>

                                Eylül Deniz Can : eyluldnzcn@gmail.com
                            </p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6">
                    <h5 className="text-light">Technologies</h5> </div>
                </div>
            </div>

        </footer>
    )
}
