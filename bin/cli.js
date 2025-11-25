#!/usr/bin/env node
import process from 'node:process'

function printHelp() {
  const h = [
    'mcp-tool',
    '',
    'Usage:',
    '  mcp-tool greet <name>',
    '  mcp-tool sum <a> <b>',
    '  mcp-tool --version',
    '  mcp-tool --help'
  ]
  console.log(h.join('\n'))
}

function version() {
  console.log('0.1.0')
}

const args = process.argv.slice(2)

if (args.length === 0 || args.includes('--help')) {
  printHelp()
  process.exit(0)
}

if (args.includes('--version')) {
  version()
  process.exit(0)
}

const cmd = args[0]

if (cmd === 'greet') {
  const name = args[1] || 'World'
  console.log(`Hello, ${name}`)
  process.exit(0)
}

if (cmd === 'sum') {
  const a = Number(args[1])
  const b = Number(args[2])
  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Invalid numbers')
    process.exit(1)
  }
  console.log(String(a + b))
  process.exit(0)
}

console.error('Unknown command')
process.exit(1)
