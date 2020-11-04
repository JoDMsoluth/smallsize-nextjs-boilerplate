import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { REGEXP } from '@/constant';
import { css } from '@/utils';
import Button from '../Button';

export default function LoginForm() {
    // nextjs에서 페이지 이동시 사용
    const router = useRouter();

    const { register, handleSubmit, errors, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
        router.push('/');
    };

    return (
        <S.Form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">email</label>
            <input
                id="email"
                name="email"
                ref={register({
                    required: 'required',
                    pattern: {
                        value: REGEXP.EMAIL,
                        message: 'Entered value does not match email format',
                    },
                })}
                type="email"
            />
            {errors.email && <span role="alert">{errors.email.message}</span>}

            <label htmlFor="password">password</label>
            <input
                id="password"
                name="password"
                ref={register({
                    required: 'required',
                    minLength: {
                        value: 5,
                        message: 'min length is 5',
                    },
                })}
                type="password"
            />
            {errors.password && (
                <span role="alert">{errors.password.message}</span>
            )}
            <Button type="submit">SUBMIT</Button>
        </S.Form>
    );
}

const S: any = {};

S.Form = styled.form`
    width: 20rem;
    ${css.flexColumn()};
`;
