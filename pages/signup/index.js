import Head from 'next/head'
import AuthLayout from '../../layout/AuthLayout'
import Link from 'next/link'
import styles from '../../styles/Form.module.css';
import { HiAtSymbol, HiFingerPrint, HiOutlineUser } from "react-icons/hi";
import { useState } from 'react';
import { useFormik } from 'formik';
import { registerValidate } from '../../lib/validate'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

export default function Register() {

    const [show, setShow] = useState({ password: false, confPassword: false })
    const router = useRouter()
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confPassword: ''
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values) {
        const options = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        }

        // await fetch('/api/auth/signup', options)
        //     .then(res => res.json())
        //     .then((data) => {
        //         // console.log(data);
        //         toast.success("Registration Successfull!")
        //         if (data) router.push('/login')
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         toast.error("Registration Failed!")
        //     });

        const status = await fetch(`https://sih-node-backend.architrathod1.repl.co/user/userregister`, options)

        if (status.status === 400) {
            toast.error("Registration Failed!")
        }
        if (status.status === 200) {
            toast.success("Registration Successfull!")
            router.push('/login')
        }
    }

    return (
        <AuthLayout>
            <Head>
                <title>Sign Up</title>
            </Head>

            <section className='w-3/4 mx-auto flex flex-col gap-10'>
                <div className="title">
                    <h1 className='text-gray-800 text-4xl font-bold py-4'>Sign Up</h1>
                    <p className='w-3/4 mx-auto text-gray-400'>Get Started - Understand Your Customers Better.</p>
                </div>

                {/* form */}
                <form className='flex flex-col gap-5' onSubmit={formik.handleSubmit}>
                    <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? 'border-rose-600' : ''}`}>
                        <input
                            type="text"
                            name='Username'
                            placeholder='Username'
                            className={styles.input_text}
                            {...formik.getFieldProps('username')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    {/* {formik.errors.username && formik.touched.username ? <span className='text-rose-500'>{formik.errors.username}</span> : <></>} */}
                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? 'border-rose-600' : ''}`}>
                        <input
                            type="email"
                            name='email'
                            placeholder='Email'
                            className={styles.input_text}
                            {...formik.getFieldProps('email')}
                        />
                        <span className='icon flex items-center px-4'>
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    {/* {formik.errors.email && formik.touched.email ? <span className='text-rose-500'>{formik.errors.email}</span> : <></>} */}
                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? 'border-rose-600' : ''}`}>
                        <input
                            type={`${show.password ? "text" : "password"}`}
                            name='password'
                            placeholder='password'
                            className={styles.input_text}
                            {...formik.getFieldProps('password')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* {formik.errors.password && formik.touched.password ? <span className='text-rose-500'>{formik.errors.password}</span> : <></>} */}

                    <div className={`${styles.input_group} ${formik.errors.confPassword && formik.touched.confPassword ? 'border-rose-600' : ''}`}>
                        <input
                            type={`${show.confPassword ? "text" : "password"}`}
                            name='confPassword'
                            placeholder='Confirm Password'
                            className={styles.input_text}
                            {...formik.getFieldProps('confPassword')}
                        />
                        <span className='icon flex items-center px-4' onClick={() => setShow({ ...show, confPassword: !show.confPassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {/* {formik.errors.confPassword && formik.touched.confPassword ? <span className='text-rose-500'>{formik.errors.confPassword}</span> : <></>} */}

                    {/* login buttons */}
                    <div className="input-button">
                        <button type='submit' className={styles.button}>
                            Sign Up
                        </button>
                    </div>
                </form>

                {/* bottom */}
                <p className='text-center text-gray-400 '>
                    Have an account? <Link href={'/login'}><a className='text-blue-700'>Log In</a></Link>
                </p>
            </section>
        </AuthLayout>
    )
}