import moment from 'moment';

export default function sitemap() {
    return [
        {
            url: 'https://nextslam.vercel.app/',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: 'https://nextslam.vercel.app/overview',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/team',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/team/shohoku',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/team/ryonan',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/team/shoyo',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/team/kainan',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/soundtrack',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://nextslam.vercel.app/guestbook',
            lastModified: moment().format("YYYY-MM-DD"),
            changeFrequency: 'daily',
            priority: 0.9,
        },
    ]
}