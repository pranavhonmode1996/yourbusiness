import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userImage from '../images/user.jpg';
const BSignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [sOrW, setSOrW] = useState(false)
    const [title, setTitle] = useState('');
    const [experience, setExperience] = useState('');
    const [age, setAge] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [baseCharges, setBaseCharges] = useState('');
    const [shopName, setShopName] = useState('');
    const [from, setFrom] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const [pinCode, setPinCode] = useState('');
    const [ShopContactNumber, setShopContactNumber] = useState('');

    const onChangeValue = (e) => {
        setSOrW(e.target.value);
    }
    return (
        <html>
            <body>
                <div className="container">
                    <div className="LoginContainer">
                        <span>Registration</span>
                        <img src={userImage} alt="" />

                        <label htmlFor="">First Name</label>
                        <input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} />

                        <label htmlFor="">Last Name</label>
                        <input type="text" required value={lastName} onChange={e => setLastName(e.target.value)} />

                        <label htmlFor="">Email Id</label>
                        <input type="text" required value={email} onChange={e => setEmail(e.target.value)} />

                        <label htmlFor="">Password</label>
                        <input type="password" required value={password} onChange={e => setPassword(e.target.value)} />

                        <div className="areYou">
                            <div className="inline">
                                <label htmlFor="">Worker</label>
                                <input type="radio" checked={sOrW === "worker"} value="worker" onChange={onChangeValue} />
                                <label htmlFor="">Seller</label>
                                <input type="radio" checked={sOrW === "seller"} value="seller" onChange={onChangeValue} />
                            </div>
                        </div>

                        {/* worker */}
                        {sOrW === "worker" && (<div className="sellerSection">
                            <div>
                                <p>Title</p>
                                <input type="text" name="title" id="title" value={title} onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div>
                                <p>Experience</p>
                                <input type="decimal" name="experience" id="experience" value={experience} onChange={e => setExperience(e.target.value)} />
                            </div>
                            <div>
                                <p>Age</p>
                                <input type="decimal" name="age" id="age" value={age} onChange={e => setAge(e.target.value)} />
                            </div>
                            <div>
                                <p>Contact Number</p>
                                <input type="decimal" name="contact" id="contact" value={contactNumber} onChange={e => setContactNumber(e.target.value)} />
                            </div>
                            <div>
                                <p>Base Charges</p>
                                <input type="decimal" name="charge" id="charge" value={baseCharges} onChange={e => setBaseCharges(e.target.value)} />
                            </div>
                        </div>)}

                        {/* seller */}
                        {sOrW === "seller" && (<div className="workerSection">
                            <div>
                                <p>Shop Name</p>
                                <input type="text" name="shopName" id="shopName" value={shopName} onChange={e => shopName(e.target.value)} />
                            </div>
                            <div>
                                <p>From</p>
                                <input type="date" name="from" id="from" value={from} onChange={e => setFrom(e.target.value)} />
                            </div>
                            <div>
                                <p>Shop Address</p>
                                <input type="text" name="shopAddress" id="shopAddress" value={shopAddress} onChange={e => setShopAddress(e.target.value)} />
                            </div>
                            <div>
                                <p>Pin Code</p>
                                <input type="decimal" name="pinCode" id="pinCode" maxLength={4} value={pinCode} onChange={e => setPinCode(e.target.value)} />
                            </div>
                            <div>
                                <p>Shop Contact Number</p>
                                <input type="decimal" name="shopContactNumber" id="shopContactNumber" maxLength={4} value={ShopContactNumber} onChange={e => setContactNumber(e.target.value)} />
                            </div>
                        </div>)}

                        <button>Sign Up</button>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default BSignUp;