#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const clientConfigPath = path.resolve('.scripts/stapsher-client.js')

const flattenSchema = (object, rootKey = '') => {
  let result = {}

  Object.keys(object).forEach(key => {
    let nextKey = `${rootKey ? `${rootKey}.` : ''}${key}`

    let value = object[key]

    let isArray = Array.isArray(value)

    if (!value || isArray || typeof value !== 'object' || value.doc) {
      result[nextKey] = value
    } else {
      result = Object.assign(result, flattenSchema(value, nextKey))
    }
  })

  return result
}

const processDefaultValue = value => {
  if (value === null) return value

  switch (typeof value) {
    case 'boolean':
      return value.toString()
    case 'object':
      if (Array.isArray(value)) return `[${value.toString()}]`
      else return Object.keys(value).length ? JSON.stringify(value) : ''
    default:
      return value
  }
}

const processFormat = format => {
  if (Array.isArray(format) && format.length) {
    return format.join(' / ')
  } else {
    return format.name ? format.name : format
  }
}

const processDoc = doc => {
  return doc
}

const stringifyClientSchema = flatSchema => {
  Object.keys(flatSchema).forEach(option => {
    let { default: defaultValue, doc, format } = flatSchema[option]

    flatSchema[option] = {
      doc: processDoc(doc),
      default: processDefaultValue(defaultValue),
      format: processFormat(format)
    }
  })

  return JSON.stringify(flatSchema, null, 2)
}

const processClientSchema = clientConfigPath => {
  let schema = require(clientConfigPath)

  let flatSchema = flattenSchema(schema)

  fs.writeFileSync(
    path.resolve('data/client_config.json'),
    stringifyClientSchema(flatSchema)
  )
}

processClientSchema(path.resolve(process.argv[2]))
