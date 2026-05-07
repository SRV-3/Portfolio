import {createBrowserRouter} from 'react-router'
import App from './App'
import ProjectPage from './pages/ProjectPage'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Hero />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "skills",
                element: <Skills />
            }
        ]
    },
    {
        path:"/project",
        element:<ProjectPage />
    }
])

export default router