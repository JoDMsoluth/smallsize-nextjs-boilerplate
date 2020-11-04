export const getPost = async () => {
    return await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
    ).then((response) => response.json());

    // const { data } = await client.get('/post/id');
    // return data;
};
