# actions-bash-with-post

Action to ease development of composite actions needing post-phase execution while [1] is not fixed.

[1] https://github.com/actions/runner/issues/1478

Inputs:
* prelude: script to be prepended to main scripts.
* run: script to be executed in main phase.
* post-run: script to be executed in post phase.
