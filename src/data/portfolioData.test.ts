import test from 'node:test';
import assert from 'node:assert/strict';
import { PROJECTS, PERSONAL_INFO, TIMELINE, SKILL_CATEGORIES } from './portfolioData';

test('portfolio data has essential identity and contact fields', () => {
  assert.equal(PERSONAL_INFO.name, 'Victor Poiani');
  assert.equal(PERSONAL_INFO.email, 'dev.victorpoiani@gmail.com');
  assert.ok(PERSONAL_INFO.github.includes('VictorPoiani'));
  assert.ok(PERSONAL_INFO.institution.includes('Universidade Federal de Viçosa'));
});

test('featured project is The Insight and has required links and technical details', () => {
  const featured = PROJECTS.find((p) => p.featured);
  assert.ok(featured, 'There must be a featured project');
  assert.ok(featured.title.includes('The Insight'));
  assert.ok(featured.technicalDetails.length >= 3);
  assert.ok(featured.objectives.length >= 2);
  assert.ok(featured.githubUrl.length > 0);
});

test('all projects have valid ids, categories, and tags', () => {
  assert.ok(PROJECTS.length >= 4);
  const categories = new Set(PROJECTS.map((p) => p.category));
  assert.ok(categories.has('Full-Stack & Web'));
  assert.ok(categories.has('IA & Visão Computacional'));

  for (const project of PROJECTS) {
    assert.ok(project.id.length > 0);
    assert.ok(project.title.length > 0);
    assert.ok(project.summary.length > 0);
    assert.ok(project.tags.length > 0);
  }
});

test('timeline and skill categories contain structured milestones', () => {
  assert.ok(TIMELINE.length >= 3);
  assert.ok(SKILL_CATEGORIES.length >= 3);
});
