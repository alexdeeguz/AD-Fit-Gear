import React from 'react'
import CategoryProductIndexItem from './category_product_index_item'

class Search extends React.Component {
    constructor(props) {
        super(props)

        this.search = this.search.bind(this)
    }

    search(e) {
        this.props.getSearchResults(e.target.value)
        if (e.target.value === "") {
            this.props.getSearchResults()
        }
    }


    componentDidMount() {
        this.props.getSearchResults()
    }

    render() {
        return (
            <div>
                <div className="placement"></div>
                <div className="search-container">
                    <div className="search-bar">
                        <p id="magnifying-glass">🔍</p>
                        <input id="search-bar" type="text" placeholder="SEARCH..." onChange={this.search}/>
                    </div>
                </div>
                
                {this.props.searches.length === 0 ? <div className="search-modal"></div> : 

                    <div>
                        <div className="product-index-div">
                            {
                                this.props.searches.map(product => (
                                    <CategoryProductIndexItem {...this.props} product={product} key={product.id} />
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Search