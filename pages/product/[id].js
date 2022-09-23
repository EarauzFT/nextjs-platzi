import React from 'react'
import { useRouter } from 'next/router';

const productItem = () => {
    const router = useRouter();
    return (
        <div>
            <h1>pag del produtco {router.query.id}</h1>
        </div>
    )
}

export default productItem
