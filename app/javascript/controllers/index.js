import { application } from "controllers/application"

import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

import NestedForm from 'stimulus-rails-nested-form'
import HelloController from "./hello_controller"

application.register('nested-form', NestedForm)
application.register("hello", HelloController)
