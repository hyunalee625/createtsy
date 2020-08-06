import React from 'react';

class ProductForm extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = this.props.product;
        this.update = this.update.bind(this);
        this.productsPreview = this.productsPreview.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    productsPreview(e) {
        const reader = new FileReader();
        const file = e.currentTarget.files[0];
        reader.onloadend = () =>
            this.setState({ photoUrl: reader.result, photoFile: file });

        if (file) {
            reader.readAsDataURL(file);
        } else {
            this.setState({ photoUrl: "", photoFile: null });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();

        formData.append('post[product_name]', this.state.product_name);
        formData.append('post[description]', this.description);
        formData.append('product[price]', this.state.price);

        if (this.state.photoFile) {

            formData.append('post[photo]', this.state.photoFile);
        }

        $.ajax({
            url: '/api/posts',
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false
        });
    }

    // render() {
    //     return(

    //     )
    // }
}

export default ProductForm;