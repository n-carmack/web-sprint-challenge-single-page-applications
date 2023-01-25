import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('name must be at least 2 characters')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('A size is required.'),
})

export default formSchema;