
import { createRoot } from 'react-dom/client'
import { MainLayout } from './layout/MainLayout'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './style.css'

createRoot( document.getElementById( 'root' ) ).render(
  <MainLayout />
)
