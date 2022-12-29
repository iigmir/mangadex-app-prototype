import React from "react";

const Box = (props = { item: {} }) => {
    const href = `https://mangadex.org/title/${props.item.id}`;
    return (<section className="ts-box is-horizontal my-bottom-gap">
        <div className="ts-content">
            <h2 className="ts-header">
                <a href={href} target="_blank">{ props.item.attributes.title.en }</a>
            </h2>
            <p>{ props.item.attributes.description.en }</p>
        </div>
    </section>)
};

class Pagination extends React.Component {
    constructor(props = { limit: 0, offset: 0, total: 0, jumpPage: () => {} }) {
        super(props);
    }
    get current_page() {
        return parseInt(this.props.offset / this.props.limit) + 1;
    }
    get total_pages() {
        const pages = parseInt(this.props.total / this.props.limit);
        const remainder = this.props.total % this.props.limit;
        const plus_page = remainder === 0 ? 0 : 1;
        return pages + plus_page;
    }
    get link_components() {
        const pages = [...Array(this.total_pages).keys()];
        return pages.map(
            (_, index) => <a
                className="item"
                key={index + 1}
                onClick={()=>this.jump(index, this.props.limit)}
            >
                {index + 1}
            </a>
        );
    }
    jump(page, limit) {
        // console.log(page, limit);
        const value = page * limit;
        this.props.jumpPage(value);
    }
    render() {
        return <div className="ts-pagination">
            <a className="item is-back" onClick={()=>this.jump(this.current_page - 1, this.props.limit)}></a>
            { [...this.link_components] }
            <a className="item is-next" onClick={()=>this.jump(this.current_page + 1, this.props.limit)}></a>
        </div>;
    }
}

class TheList extends React.Component {
    constructor(props = { data: {}, jumpPage: () => {} }) {
        super(props);
    }
    get list() {
        return this.props.data.data ?? [];
    }
    render() {
        if( this.list.length > 0 ) {
            const boxes = this.list.map(item => <Box item={item} key={item.id} />);
            return <article className="the-list">
                {boxes}
                <Pagination
                    limit={this.props.data.limit}
                    offset={this.props.data.offset}
                    total={this.props.data.total}
                    jumpPage={value => this.props.jumpPage(value)}
                />
            </article>;
        }
        return <div className="the-list empty" />;
    }
}

export default TheList;
