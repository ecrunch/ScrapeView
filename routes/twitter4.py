import json
import pymongo
import tweepy

access_token = "1240067970-xojbgdDmystEPIrseuWj2GSVwcBa9hIUXyxamtt"
access_token_secret = "XYuUW53YxBjnbm5u5RyFq2wNVi900w2hHWRagyEl4cchq"
consumer_key = "pNjl1WY3vDr2AyPFg1SQc6E6q"
consumer_secret = "LlVS1v9hflfcInvyW863sX09xBMGRTISWCmz8iNeU7lC2b5xKb"


auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)
api = tweepy.API(auth)

trends = api.trends_available()

db = pymongo.MongoClient('localhost', 27017).Twitter
