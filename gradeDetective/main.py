#!/usr/bin/env python
#
# Copyright 2007 Google Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
import webapp2
import logging
import re
import jinja2
import os
import json

# We need to specify a Jinja environment. Configurations
JINJA_ENVIRONMENT = jinja2.Environment (
    # Loader: Where will my template be stored. Specify where the templates are.
    # auto : is a safety measure. Avoid say entries like <script> tags
    loader = jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions = ['jinja2.ext.autoescape'],
    autoescape = True
)

class MainHandler(webapp2.RequestHandler):
    def get(self):
        main_page_content = open('dashboard.html').read()
        self.response.write(main_page_content)

app = webapp2.WSGIApplication([
    ('/', MainHandler),
    ('/solo_hacker_form', SoloFormHandler),
    ('/solo_hacker_info', SoloHackerHandler),
    ('/groupinput', GroupInputHandler),
], debug=True)
