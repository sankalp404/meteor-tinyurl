import { Mongo } from 'meteor/mongo'
import validUrl from 'valid-url'
import { check, Match } from 'meteor/check'

Meteor.methods({
    'links.insert': function(url) {
        console.log("Attempting to save.. " + url)
        check(url, Match.Where(url => validUrl.isUri(url)))

        // We are ready to save the url
        // Super neat Trick
        const token = Math.random().toString(36).slice(-5)
        Links.insert({ url, token, clicks: 0 })
    }
})

export const Links = new Mongo.Collection('links')