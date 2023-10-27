class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if (this.id === id) {
            this.name = name || this.name;
            this.description = description || this.description;
            this.categoryGenre = categoryGenre || this.categoryGenre;
        }
    }

    toString () {
        return `
        <div class="content-item-wrapper" id=content-item-${this.id}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
            </div>
            `;
    }
}