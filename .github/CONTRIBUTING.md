[Home](../README.md)

# Git Contributing Guidelines

In order to contribute to a repository there are a few guidelines we'll need to follow whether is a code update, commit message, branch, issue, pull request or git tactics.

### Table of Contents
- [Branch Naming](#branch-naming)
- [Commit Messages](#commit-messages)
- [Pull Requests](#pull-requests)
- [Git Tactics](#git-tactics)

## Branch Naming
Branches must be created in order to keep code organized and separated from the rest of the code. Following the convention branch-per-feature, the creation of a new branch is necessary whether we're developing and pushing a WIP, feature, bug fix or an experiment.

### Branch Naming Conventions
Git branches must follow the next conventions when working or developing over them.

1. First part must be a Grouping Token
2. Second part must be a Lead Token
3. If available add issue tracker number between Group and Lead tokens
3. Tokens must be separated by slashes
4. Do not use numbers as leading parts
5. Do not use long descriptive Lead Tokens
6. Tokens must match current workflow
7. Use short nouns for Grouping and Lead Tokens

```
<group>/<tracker-number>/<lead>
```

```
group1/XXXX/lead-foo
group1/YYYY/lead-baz
group2/lead-bar
group3/lead-foo
```

#### Grouping Tokens
Grouping Tokens are the ones in front of the branch name. Use one of the next defined tokens to group the branches.

```
feat  Feature I'm adding or expanding
bug   Bug fix, experiment or monkey patch
test  Integration of tests
chore  Throwaway branch for experiments
doc   README and/or documentation only
```

#### Lead Tokens
Lead Tokens are the ones next to the Grouping Tokens in a branch name. This token must match your flow and it's personalized depending of your code addition or subtraction.

```
feat/order-blueprints
bug/sticky-navbar
test/post-model-attributes
chore/login-bug-test
```

#### JIRA Tracker Number
To integrate JIRA tracker number to this branch name structure, we'll need to add it between the Grouping and the Lead Tokens.

```
feat/RSSI-12/order-blueprints
bug/RSEM-10/sticky-navbar
test/RCMY-9/post-model-attributes
chore/RUMS-49/login-bug-test
```

## Commit Messages

**Not this**

![Not this](https://imgs.xkcd.com/comics/git_commit.png)

Commit messages must be understandable for future reference, bug tracking or code history. The ideal commit message will consist of three parts that we'll be reviewing below. First, let's take a look at the following commit model.

```
Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.  Wrap it to about 72
characters or so.  In some contexts, the first line is treated as the
subject of an email and the rest of the text as the body.  The blank
line separating the summary from the body is critical (unless you omit
the body entirely); tools like rebase can get confused if you run the
two together.

Write your commit message in the imperative: "Fix bug" and not "Fixed bug"
or "Fixes bug."  This convention matches up with commit messages generated
by commands like git merge and git revert.
```

We are going to use the following established conventions for writing commit messages.

1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

In order to achieve this workflow when writing a commit message, we need to avoid using the `message`flag for git command and use `commit` method alone in order to open up our default text editor.

**Incorrect use**

```
git add file
git commit --message 'My commit message'
```

**Correct use**

```
git add file
git commit
```

We'll need to wrap up our commit message text in 72 columns in order to be shown correctly with `git log` and `less -S`. To achieve this in your text editor, you'll need to find the corresponding configuration.

### Commit Lint
This project uses [CommitLint plugin](https://commitlint.js.org/#/) to enforce the commit conventions, you will be able to find the rules we are gonna be following [here](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)


## Pull Requests
Before making a Pull Request, check that the correct base branch is selected, it usually is `development`.
In order to have a more organized, documented and easy to review Pull Requests, we propose the next convention for Pull Request titles and body.

### Title
Title must be clear and up to 75 characters. It should include the main group, as the branch specifies, JIRA tracking number if available and a short description of the PR.

```
<group> - <tracker-number> - Short Description
```

If PR is not completed it should be tagged at the begining of it as WIP.

```
[WIP] <group> - <tracker-number> - Short Description
```

### Body

The template is written in Markdown format to match the friendly format from Github.

```
#### What does this PR do?
#### Where should the reviewer start?
#### How should this be manually tested?
#### Any background context you want to provide?
#### What are the relevant tickets?
#### Screenshots (if appropriate)
#### Questions
```

Let's review each of the sections.

- **What does this PR do?** A brief explanation synthesizing the feature, bug or fix.
- **Where should the reviewer start?** Explain where the reviewer should start in order to review the whole addition or subtractions.
- **How should this be manually tested?** List of steps to reproduce, corroborate or tests to run. Write this section clear enough so that external users can also follow it and test the fix.
- **Any background context you want to provide?** Any information regarding the PR that the reviewer should know.
- **What are the relevant tickets?** Link to issues, related PR, JIRA issues, ect.
- **Screenshots (if appropriate)** Screenshots of the feature if available.
- **Questions** If available, to another developer or reviewer.

## Reviewing Pull Requests

You can watch a nice presentation about code reviews best practices here: [Code reviews like a human, by Michael Lynch](https://www.youtube.com/watch?v=NuNqWtOmqnA)

### 1. Start reviewing immediately

- Treat code reviews as a high priority
- While waiting for a review a developer might be blocked
- When you start reviews immediately, you create a virtuous cycle
  - Review turnaround becomes a function of code size
  - Smaller PRs are reviewed faster
  - Smaller PRs are easier and more pleasant
- Slow reviews incentivize larger PRs

#### Techniques

- First response should be as [fast as possible](https://google.github.io/eng-practices/review/reviewer/speed.html#responses), even if the whole review takes more time
- The whole team should do code reviews, even if final approval is restricted to one person. Having more reviews helps accelerate the process and disseminate knowledge
- Use [feature flags](https://www.martinfowler.com/articles/feature-toggles.html)
- [Split large changesets](https://google.github.io/eng-practices/review/developer/small-cls.html), even better if you can suggest good splitting strategies
- If the team is struggling to review quickly maybe the pace needs to be adjusted
- [LGTM with comments](https://google.github.io/eng-practices/review/reviewer/speed.html#lgtm-with-comments)


### 2. Start high level and work your way down

- Understand the parent ticket or issue first
- How would you code the solution? Does it needs code?
- Limit the first round of comments to higher level arguments like:
    - product or feature related questions (are we providing too much features? too little?)
    - redesigning the class interface or API being created (method names, number of methods needed, what does each method is supposed to do)
- Your low-level notes might become moot once the author integrates your high-level notes

### 3. Frame correctly your requests

- Never say “you”. Keep ego out. Try using “we”. Remember this is a team effort.
- Ask questions, don’t give orders
- Tie notes to principles, not opinions
    - Bad: We should split this class into two
    - Good: Right now, this class is responsible for both downloading the file and parsing it. We should split it up into a downloader class and parsing class per the single responsibility principle.

### 4. Be generous with code examples

- Developer might be under pressure to get code checked in
- It clarifies any request
- Examples demonstrate that you genuinely want to help

##### Example 1

    urls = []
    for path in paths:
      url = 'https://'
      url += domain
      url += path
      urls.append(url)

Option 1: You can simplify that with a list comprehension

Option 2: Consider simplifying with a list comprehension like this:

    urls = ['https://' + domain + path for path in paths]

##### Example 2

- Option 1: Maybe we should add a few more unit tests
- Option 2: Maybe we should add a few tests for case x. You can find a similar test here: [insert example or link]. This will need allow mocking dependency y like done here: [insert example or link].

### 5. Offer sincere praise, learn something new

- Code reviews don’t have to be about mistakes
- Can you learn something new?
- Keep an eye out for things that delight you:
  - “I wasn’t aware of this API. That’s really useful!”
  - “This is an elegant solution. I never would have thought of that.”
  - “Breaking up this function was a great idea. It’s so much simpler now.”
- Praising reinforces learning. Looking for things to praise also helps you find new things to learn.
- Recognize when they show improvement

## Merging Pull Requests

To merge a pull request, it should have at least one positive reviews and no pending change or fix requests.

Each project or repo should have

- one 'primary' Merge Master in charge of merging PRs
- and at least 1 'secondary'/'interim' for when the Primary is unavailable

The Merge Master(s) should be identified in the repo's `CONTRIBUTING`.  If a repo has
only a 'primary' and an interim becomes necessary, a project team may decide
that simply 'advertising' the interim via Slack, e-mail, _etc_., will suffice
rather than requiring update(s) (_e.g._, before and after the Primary's
inavailability) to the `CONTRIBUTING`.

It is responsibility of the author to ask for reviews if nobody has taken a look at the PR, but it is also responsibility of the team to be responsive to this requests.

PRs shouldn't last more than 3 days without activity, either have comments and change requests or get merged.


## Git Tactics
To have a more organized commit history and log we suggest to use the following git tactics to pull and manage branches.

### Rebase a branch
If we want to rebase a branch we use `rebase`.

```
$ git rebase branch_name
```

After the branch is reviewed and conflicts are resolved, we continue with the rebasing process with `--continue` flag.

```
  git add .
  git rebase --continue
```

[Home](../README.md)
