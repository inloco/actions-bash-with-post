import * as core from '@actions/core'
import * as io from '@actions/io'
import { execSync } from 'child_process'

export default async function(scriptName: string) {
  const bash = await io.which('bash', true)

  const prelude = core.getInput('prelude') || ''
  const mainScript = core.getInput(scriptName)

  if (!mainScript) {
    return
  }

  const script = `
    ${prelude}
    ${mainScript}
  `

  execSync(script, { shell: bash, stdio: 'inherit' })
}
