import styles from './AllInOne.module.css'

export function useAllInOne() {

    const cardsContent = [
        { tag: 'Featured', title: 'The map of mathematics', text: 'Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.', tagStyle: styles.tagFeatured },
        { tag: 'Popular', title: 'Design for how people think', text: 'Aliquam ut euismod condimentum elementum ultricies volutpat sit non.', tagStyle: styles.tagPopular },
        { tag: 'New', title: 'International & commercial law', text: 'Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.', tagStyle: styles.tagNew },
    ]

    return {
        cardsContent,
    }
}